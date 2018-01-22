class DaysWithoutController < ApplicationController
  def index
    render json: DaysWithout.all
  end

  def new
    DaysWithout.create!(
      goal_name: params["goalName"],
      days: params["days"],
      with_or_without: params["withOrWithout"]
    )
  end
end
