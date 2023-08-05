import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("article"))) {
    return knex.schema.createTable("article", (field) => {
      field.increments();
      field.string("title");
      field.string("summary");
      field.string("description");
      field.string("image");
      field.integer("category_id");
      field.timestamps();
    });
  }
}

export async function down(knex: Knex): Promise<void> {}
