class CreateBuilds < ActiveRecord::Migration[5.1]
  def change
    create_table :builds do |t|
      t.string :name
      t.string :category
      t.integer :user_id
      t.float :price
      t.datetime :start_date
      t.datetime :done_date

      t.timestamps
    end
  end
end
