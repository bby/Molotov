class CreateCocktails < ActiveRecord::Migration
  def self.up
    create_table :cocktails do |t|
      t.column "accuracy", :integer
      t.column "latitude", :float
      t.column "longitude", :float
      t.column "message", :text
      t.timestamps
    end
  end

  def self.down
    drop_table :cocktails
  end
end
