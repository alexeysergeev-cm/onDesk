Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :update]

    resources :desks do 
      resources :lists, only: :index
    end
    
    resources :lists, only: [:create, :destroy, :update]
    patch "lists/:id/update_two_lists", to: "lists#update_two_lists"

    resource :session, only: [:create, :destroy] 
    resources :desk_memberships, only: [:create, :destroy]
    resources :papers, only: [:create, :destroy, :update]
    resources :comments, only: [:create, :destroy, :update]

  end

  #create a search route, 
  #route                       controller#method
  get "/api/search", to: "api/search_bars#search"

  mount ActionCable.server => '/cable'

  root to: 'static_pages#root'
end
