class CocktailsController < ApplicationController
  def index 
    @cocktail = Cocktail.new
  end
  
  def create
    @cocktail = Cocktail.new(params[:cocktail])
    if @cocktail.save
      flash[:notice] = "Bomb dropped."
    end
  end
end
