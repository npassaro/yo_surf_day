class CreateSurfDays < ActiveRecord::Migration[7.0]
  def change
    create_table :surf_days do |t|
      t.string :title
      t.text :description
      t.datetime :date

      t.timestamps
    end
  end
end
