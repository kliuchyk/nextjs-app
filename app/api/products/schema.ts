import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Name is required"),
  price: z
    .number("Price is required")
    .min(1, "Price must be a positive number")
    .max(10000, "Price must be less than 100"),
});

export default schema;
