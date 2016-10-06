class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end

  def new
    @author = Author.new
  end

  def create
    author = Author.create author_params
    redirect_to author
  end

  def edit
    @author = Author.find params[:id]
  end

  def update
    author = Author.find params[:id]
    author .update author _params
    redirect_to author
  end

  # def show
  #   @artist = Artist.find params[:id]
  # end
  #
  # def destroy
  #   artist = Artist.find params[:id]
  #   artist.destroy
  #   redirect_to artists_path
  # end
  #
  # private
  #   def artist_params
  #     params.require(:artist).permit(:name, :nationality, :dob, :period, :image)
  #   end

end
