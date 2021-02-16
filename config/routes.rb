Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index]
    resources :desks, only: [:create, :index, :show, :destroy]
    resource :session, only: [:create, :destroy] 
  end
  
end
