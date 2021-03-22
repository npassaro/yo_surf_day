class SurfDaysController < ApplicationController
    wrap_parameters format: [:xml, :html]

    def index
        respond_with([])
    end

    def show

    end

    def create
        logger.debug  "!!! PARAMS: #{surf_day_params.inspect}"
    end

    def update

    end

    def destroy

    end

    private
    # Using a private method to encapsulate the permissible parameters
    # is just a good pattern since you'll be able to reuse the same
    # permit list between create and update. Also, you can specialize
    # this method with per-user checking of permissible attributes.
    def surf_day_params
      params.permit(
            :day_awesomeness_rating, 
            :day_date_and_time,
            :day_description,
            day_prediction: [
                :swell_height,
                :swell_period,
                :swell_direction,
                :energy,
                :wind_speed,
                :wind_gusts,
                :wind_direction,
                :water_temperature
            ]
        )
    end
end