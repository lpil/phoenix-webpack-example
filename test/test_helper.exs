ExUnit.start

Mix.Task.run "ecto.create", ~w(-r MyApp.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r MyApp.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(MyApp.Repo)

