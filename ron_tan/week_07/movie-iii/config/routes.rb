Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/pages/show' => 'pages#show'
end
