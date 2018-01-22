class DaysWithoutController < ApplicationController
  def index
    render json: DaysWithout.all
  end

  def new
    render json: DaysWithout.create!(
      goal_name: params["goalName"],
      days: params["days"],
      with_or_without: params["withOrWithout"]
    )
  end

  def reset
    entry = DaysWithout.find_by(goal_name: params["goalName"])
    entry.update(days: 0)
    render json: entry
  end

  def delete
    DaysWithout.find_by(goal_name: params["goalName"]).destroy
    render json: {goalName: params["goalName"]}
  end
end
