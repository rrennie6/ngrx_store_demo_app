Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: redirect('/ui/days_without')

  get '/ui/*junk' => 'home#index'
  get '/days_without' => 'days_without#index'
  post '/days_without/new' => 'days_without#new'
  post '/days_without/reset' => 'days_without#reset'
end
