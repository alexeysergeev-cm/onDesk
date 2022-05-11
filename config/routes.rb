Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :update]

    resources :desks do 
      resources :lists, only: :index
    end
    
    resources :lists, only: [:create, :destroy, :update] do
      collection do 
        # patch "/:id/update_two_lists", to: "lists#update_two_lists", as: :update_two_lists
        patch :update_two_lists, path: "/:id/update_two_lists"
      end
    end

    resource :session, only: [:create, :destroy] 
    resources :desk_memberships, only: [:create, :destroy]
    resources :papers, only: [:create, :destroy, :update]
    resources :comments, only: [:create, :destroy, :update]

    #route,       controller#action,        as: :something (optional) 
    get "search", to: "search_bars#search"

    resources :links, only: [:create, :destroy]
  end

  get "/s/:slug", to: 'api/links#show', as: :slug
  mount ActionCable.server => '/cable'

  root to: 'static_pages#root'
end
