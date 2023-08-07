import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("articles"))) {
    return knex.schema.createTable("articles", (field) => {
      field.increments();
      field.string("title");
      field.string("summary");
      field.string("description");
      field.string("image");
      field.integer("category_id");
      field.timestamps(true,true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {}
