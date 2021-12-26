require "test_helper"

class SurfDaysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @surf_day = surf_days(:one)
  end

  test "should get index" do
    get surf_days_url
    assert_response :success
  end

  test "should get new" do
    get new_surf_day_url
    assert_response :success
  end

  test "should create surf_day" do
    assert_difference("SurfDay.count") do
      post surf_days_url, params: { surf_day: { date: @surf_day.date, description: @surf_day.description, title: @surf_day.title } }
    end

    assert_redirected_to surf_day_url(SurfDay.last)
  end

  test "should show surf_day" do
    get surf_day_url(@surf_day)
    assert_response :success
  end

  test "should get edit" do
    get edit_surf_day_url(@surf_day)
    assert_response :success
  end

  test "should update surf_day" do
    patch surf_day_url(@surf_day), params: { surf_day: { date: @surf_day.date, description: @surf_day.description, title: @surf_day.title } }
    assert_redirected_to surf_day_url(@surf_day)
  end

  test "should destroy surf_day" do
    assert_difference("SurfDay.count", -1) do
      delete surf_day_url(@surf_day)
    end

    assert_redirected_to surf_days_url
  end
end
