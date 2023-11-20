import { Query } from '../database/conection.js'


class SelecaoRepository {
  create(selecao) {
    const sql = 'INSERT INTO selecoes SET ?'
    return Query(sql, selecao, 'Não foi possível cadastrar!')
  }
  
  findAll() {
    const sql = 'SELECT * FROM selecoes;'
    return Query(sql, 'Não foi possível localizar!')
  }

  findByID(id) {
    const sql = 'SELECT * FROM selecoes WHERE id=?'
    return Query(sql, id, 'Não foi possível localizar este id!')
  }
  update(id, selecao) {
    const sql = 'UPDATE selecoes SET ? WHERE id=?'
    return Query(sql, [selecao, id], 'Não foi possível atualizar esta seleção!')
  }
  delete(id) {
    const sql = 'DELETE FROM selecoes WHERE id=?'
    return Query(sql, id, 'Não foi possível deletar!')
  }
}

export default new SelecaoRepository();