class DaysWithoutController < ApplicationController
  def index
    render json: DaysWithout.all
  end
end
