require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'books.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
  belongs_to :author
end

class Author < ActiveRecord::Base
  has_many :books
end

get '/' do
  erb :home
end

# Index
get '/books' do
  @books = Book.all
  erb :books_index
end

get '/books/new' do
  erb :books_new
end

post '/books' do
  book = Book.new
  book.name = params[:name]
  book.family = params[:genre]
  book.image = params[:image]
  book.plant_id = params[:author_id]
  book.save
  redirect "/books/#{ book.id }"
end

get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end
