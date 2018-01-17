class CreateDaysWithoutTable < ActiveRecord::Migration[5.1]
  def up
    create_table :days_without do |t|
      t.string :goal_name, null: false
      t.integer :days, null: false, default: 0
      t.boolean :with_or_without, null: false, default: false
    end

    execute <<-SQL
      INSERT INTO days_without (goal_name, days, with_or_without)
      VALUES ('Junk Food', 0, false),
             ('Reading', 2, true),
             ('Playing an instrument', 7, true)
    SQL
  end

  def down
    execute <<-SQL
      DROP TABLE days_without;
    SQL
  end
end
