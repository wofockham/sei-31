class Bank
  attr_reader :name, :accounts

  def initialize(name)
    @name = name
    @accounts = Hash.new(0) # 0 is the default
  end

  def create_account(account_name, balance)
    @accounts[account_name] = balance
  end
end
