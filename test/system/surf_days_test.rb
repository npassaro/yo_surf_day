require "application_system_test_case"

class SurfDaysTest < ApplicationSystemTestCase
  setup do
    @surf_day = surf_days(:one)
  end

  test "visiting the index" do
    visit surf_days_url
    assert_selector "h1", text: "Surf days"
  end

  test "should create surf day" do
    visit surf_days_url
    click_on "New surf day"

    fill_in "Date", with: @surf_day.date
    fill_in "Description", with: @surf_day.description
    fill_in "Title", with: @surf_day.title
    click_on "Create Surf day"

    assert_text "Surf day was successfully created"
    click_on "Back"
  end

  test "should update Surf day" do
    visit surf_day_url(@surf_day)
    click_on "Edit this surf day", match: :first

    fill_in "Date", with: @surf_day.date
    fill_in "Description", with: @surf_day.description
    fill_in "Title", with: @surf_day.title
    click_on "Update Surf day"

    assert_text "Surf day was successfully updated"
    click_on "Back"
  end

  test "should destroy Surf day" do
    visit surf_day_url(@surf_day)
    click_on "Destroy this surf day", match: :first

    assert_text "Surf day was successfully destroyed"
  end
end
