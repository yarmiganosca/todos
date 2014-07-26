class TasksController < ApplicationController
  respond_to :json

  def index
    respond_to do |format|
      format.json do
        render json: {tasks: Task.in_creation_order}, status: :ok
      end
    end
  end

  def create
    task = Task.create(params)

    render_task(task)
  end

  def update
    task = Task.find(params[:id]).update(params)

    render_task(task)
  end

  private

  def render_task
    respond_to do |format|
      format.json do
        if task.valid?
          render json: {task: task}, status: :ok
        else
          render json: {errors: task.errors}, status: :unprocessable_entity
        end
      end
    end
  end
end
