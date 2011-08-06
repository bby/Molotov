class MembersController < ApplicationController
  def new
    @member = Member.new
  end
  
  def create
    @member = Member.new(params[:cocktail])
    if @member.save
      flash[:notice] = "Member created"
    end
  end
end
