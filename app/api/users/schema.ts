import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email format"),
});

export default schema;
