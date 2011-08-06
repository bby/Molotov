class TeamsController < ApplicationController
  def index
    @teams = Team.new
  end
  
  def create
    @team = Team.new(params[:team])
    if @team.save
      flash[:notice] = "Team created."
    end
  end
end
