it("Si hacemos repetir('lovelace', 3) debería retornar ['lovelace', 'lovelace', 'lovelace']", function() {
  let resultado = repetir('lovelace', 3)
  assert.deepEqual(resultado, ['lovelace', 'lovelace', 'lovelace'],`repetir('lovelace', 3) debería retornar ['lovelace', 'lovelace', 'lovelace'] pero fue ${resultado}`);
})

it("Si hacemos repetir('a', 5) debería retornar ['a', 'a', 'a', 'a', 'a']", function() {
  let resultado = repetir('a', 5)
  assert.deepEqual(resultado, ['a', 'a', 'a', 'a', 'a'],`repetir('a', 5) debería retornar ['a', 'a', 'a', 'a', 'a'] pero fue ${resultado}`);
})

