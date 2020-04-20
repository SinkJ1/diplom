import React from "react"
const AddFilm = () => {

    return <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Название фильма:</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Название"/>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput2">Логотип:</label>
      <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="путь"/>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput3">Плеер:</label>
      <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="путь"/>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea4">Описание фильма</label>
      <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Стоимсоть фильма:</label>
      <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Стоимость"/>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Сборы фильма:</label>
      <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Сборы"/>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Год выпуска</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Режиссёр</label>
      <select class="selectpicker show-tick" id="devicePicker" data-none-results-text="I found no results">
  <option>Option 1</option>
  <option>Option 1</option>
  <option>Option 1</option>
  <option>Option 1</option>
</select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Актёры</label>
      <select multiple class="form-control" id="exampleFormControlSelect2" data-live-search="true">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Страны</label>
      <select multiple class="form-control" id="exampleFormControlSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Жанры</label>
      <select multiple class="form-control" id="exampleFormControlSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Добавить</button>
  </form>
}

export default AddFilm