class CreateSurfDays < ActiveRecord::Migration[6.1]
  def change
    create_table :surf_days do |t|
      t.integer :day_awesomeness_rating
      t.datetime :day_date_and_time
      t.text :day_description

      t.timestamps
    end
  end
end
