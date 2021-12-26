class CreateForecasts < ActiveRecord::Migration[7.0]
  def change
    create_table :forecasts do |t|
      t.references :surf_day, null: false, foreign_key: true
      t.float :wind_speed
      t.string :wind_direction
      t.float :surf_height
      t.string :surf_direction
      t.integer :surf_energy

      t.timestamps
    end
  end
end
