Rails.application.routes.draw do
  namespace :api do
    get 'papers_controller/create'
    get 'papers_controller/update'
    get 'papers_controller/destroy'
  end
  namespace :api do
    get 'lists/create'
    get 'lists/update'
    get 'lists/destroy'
    get 'lists/index'
  end
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index]
    resources :desks, only: [:create, :index, :show, :destroy, :update]
    resource :session, only: [:create, :destroy] 
    resources :desk_memberships, only: [:create]
    resources :lists, only: [:create, :index, :destroy, :update]
  end
  
end
