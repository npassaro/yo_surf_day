class SurfDaysController < ApplicationController
  before_action :set_surf_day, only: %i[ show edit update destroy ]

  # GET /surf_days or /surf_days.json
  def index
    @surf_days = SurfDay.all
  end

  # GET /surf_days/1 or /surf_days/1.json
  def show
  end

  # GET /surf_days/new
  def new
    @surf_day = SurfDay.new
  end

  # GET /surf_days/1/edit
  def edit
  end

  # POST /surf_days or /surf_days.json
  def create
    @surf_day = SurfDay.new(surf_day_params)

    respond_to do |format|
      if @surf_day.save
        format.html { redirect_to surf_day_url(@surf_day), notice: "Surf day was successfully created." }
        format.json { render :show, status: :created, location: @surf_day }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @surf_day.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /surf_days/1 or /surf_days/1.json
  def update
    respond_to do |format|
      if @surf_day.update(surf_day_params)
        format.html { redirect_to surf_day_url(@surf_day), notice: "Surf day was successfully updated." }
        format.json { render :show, status: :ok, location: @surf_day }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @surf_day.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /surf_days/1 or /surf_days/1.json
  def destroy
    @surf_day.destroy

    respond_to do |format|
      format.html { redirect_to surf_days_url, notice: "Surf day was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_surf_day
      @surf_day = SurfDay.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def surf_day_params
      params.require(:surf_day).permit(:title, :description, :date)
    end
end
