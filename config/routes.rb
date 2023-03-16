Rails.application.routes.draw do
  resources :player_scores
  resources :rounds
  resources :players
  resources :holes
  resources :scorecards
  resources :tee_colors
  resources :courses
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
