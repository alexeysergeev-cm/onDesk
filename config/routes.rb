Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index]
    resources :desks, only: [:create, :index, :show, :destroy, :update]
    resource :session, only: [:create, :destroy] 
    resources :desk_memberships, only: [:create]
    resources :lists, only: [:create, :index, :destroy, :update]
    resources :papers, only: [:create, :destroy, :update]
  end
  
end
