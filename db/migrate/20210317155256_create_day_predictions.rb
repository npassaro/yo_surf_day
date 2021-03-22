class CreateDayPredictions < ActiveRecord::Migration[6.1]
  def change
    create_table :day_predictions do |t|
      t.decimal :swell_height, precision: 4, scale: 1, null: false
      t.integer :swell_period, null: false
      t.string :swell_direction, limit: 3, null: false
      t.integer :energy
      t.decimal :wind_speed, precision: 4, scale: 1, null: false
      t.decimal :wind_gusts, precision: 4, scale: 1
      t.string :wind_direction, limit: 3, null: false
      t.decimal :water_temperature, precision: 4, scale: 1
      t.references :surf_day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
