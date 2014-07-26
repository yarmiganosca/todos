class AddTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :text
      t.timestamp :completed_at

      t.timestamps
    end
  end
end
