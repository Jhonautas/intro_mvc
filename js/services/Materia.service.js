class MateriaService {
    constructor() {
        this.materias = []
        this.updateListMateriasFromlocalStorage()
    }

    add(materia) {
        if (!materia instanceof MaterialModel) {
            throw new Error ('A materia deve ser uma instancia de MateriaModel')
        }
        this.materias.push(materia)
        this.updateLocalStorage()
    }

    update(materia) {
        return materia
    }

    searchByid(id) {
        return this.materias.find(materia => materia._id === id)
    }

    getAll () {
        returnthis.materias
    }

    updateLocalStorage() {
        let materias = JSON.stringify(this.materias)
        localStorage.setItem('materias', materias)
    }

    updateListAlunosFromLocalStorage() {
        let local = localStorage.getItem('materias')
        let materias = []
        if (local) {
            materias = JSON.parse(local)
        }
        materias.forEach(aluno => {
            this.add(new MateriaoModel(materia))
        })
    }
}