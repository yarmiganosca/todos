Rails.application.routes.draw do
  root to: "home#index"

  resources :tasks, only: [:index, :create, :update]
end
