# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_17_155256) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "day_predictions", force: :cascade do |t|
    t.decimal "swell_height", precision: 4, scale: 1, null: false
    t.integer "swell_period", null: false
    t.string "swell_direction", limit: 3, null: false
    t.integer "energy"
    t.decimal "wind_speed", precision: 4, scale: 1, null: false
    t.decimal "wind_gusts", precision: 4, scale: 1
    t.string "wind_direction", limit: 3, null: false
    t.decimal "water_temperature", precision: 4, scale: 1
    t.bigint "surf_day_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["surf_day_id"], name: "index_day_predictions_on_surf_day_id"
  end

  create_table "surf_days", force: :cascade do |t|
    t.integer "day_awesomeness_rating"
    t.datetime "day_date_and_time"
    t.text "day_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "day_predictions", "surf_days"
end
