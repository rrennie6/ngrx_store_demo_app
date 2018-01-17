Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: redirect('/ui/days_without')

  get '/ui/*junk' => 'home#index'
  resources :days_without, only: [:index]
end
