class ForecastsController < ApplicationController
  before_action :set_surf_day

  def create
    @surf_day.forecasts.create! params.required(:forecast).permit([
      :wind_speed,
      :wind_direction,
      :surf_height,
      :surf_direction,
      :surf_energy
    ])
    redirect_to @surf_day
  end

  private
    def set_surf_day
      @surf_day = SurfDay.find(params[:surf_day_id])
    end
end
