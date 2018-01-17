# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

desc 'Starts the Server'
task :start_server, :port, :pid_filename do |_task, args|
  args.with_defaults(port: 3000, pid_filename: nil)
  command = "rails s -b 0.0.0.0 -p #{args[:port]}"
  command << " --pid=tmp/pids/#{args[:pid_filename]}.pid" unless args[:pid_filename].nil?
  exec(command)
end
