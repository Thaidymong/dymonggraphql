import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    if (!(await knex.schema.hasTable("users"))) {
        return knex.schema.createTable("users", (field) => {
          field.increments();
          field.string("user_name");
          field.string("user_address");
          field.timestamps(true, true);
        });
      }
}


export async function down(knex: Knex): Promise<void> {
}

