import { createMovie } from "./create-movie";
import { createPerson } from "./create-person";
import { createStudio } from "./create-studio";
import { createTagCategory } from "./create-tag-category";
import { createTag } from "./create-tag";
import { createUnit } from "./create-unit";
import { removeMovies } from "./remove-movies";
import { removePeople } from "./remove-people";
import { removeStudios } from "./remove-studios";
import { removeTagCategories } from "./remove-tag-categories";
import { removeTags } from "./remove-tags";
import { removeUnits } from "./remove-units";
import { updateMovieRole } from "./update-movie-role";
import { updateMovie } from "./update-movie";
import { updatePerson } from "./update-person";
import { updateStudio } from "./update-studio";
import { updateTagCategory } from "./update-tag-category";
import { updateTag } from "./update-tag";
import { updateUnit } from "./update-unit";

export const mutations = [
  createMovie,
  createPerson,
  createStudio,
  createTagCategory,
  createTag,
  createUnit,
  removeMovies,
  removePeople,
  removeStudios,
  removeTagCategories,
  removeTags,
  removeUnits,
  updateMovieRole,
  updateMovie,
  updatePerson,
  updateStudio,
  updateTagCategory,
  updateTag,
  updateUnit
];
