import { Router } from "express";
import db from "./database/connection";
import convertHoursToMinutes from "./Utils/convertHoursToMinutes";

const route = Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

route.post("/classes", async (req, res) => {
  const { name, avatar, whatsapp, bio, cost, subject, schedule } = req.body;

  const trx = await db.transaction();

  try {
    const insertedUsersIds = await trx("users").insert({
      name,
      bio,
      avatar,
      whatsapp,
    });

    const [user_id] = insertedUsersIds;

    const insertedClassIds = await trx("classes").insert({
      subject,
      cost,
      user_id,
    });

    const [class_id] = insertedClassIds;

    const classSchedule = schedule.map((element: ScheduleItem) => {
      const { from, to, week_day } = element;
      return {
        class_id,
        week_day,
        from: convertHoursToMinutes(from),
        to: convertHoursToMinutes(to),
      };
    });

    await trx("class_schedule").insert(classSchedule);

    await trx.commit();

    return res.status(201).send();
  } catch (err) {
    await trx.rollback();

    return res
      .status(400)
      .json({ message: "Unexpected error while creating new class" });
  }
});

export default route;
