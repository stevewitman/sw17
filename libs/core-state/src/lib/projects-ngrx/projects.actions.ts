import { createAction, props } from '@ngrx/store';
import { Project } from '@bb/core-data';

// Select Action
export const projectSelected = createAction(
  '[PROJECTS] Project Selected',
  props<{ selectedProjectId: string | number }>()
);

// Load Actions
export  const  loadProjects = createAction(
  '[PROJECTS] Load Projects',
);

export const projectsLoaded = createAction(
  '[PROJECT] Projects Loaded',
  props<{ projects: Project[] }>()
);

// Create Actions
export  const  createProject = createAction(
  '[PROJECTS] Create Projects',
  props<{ project: Project }>()
);

export const projectCreated = createAction(
  '[PROJECT] Projects Created',
  props<{ project: Project }>()
);

// Update Actions
export  const  updateProject = createAction(
  '[PROJECTS] Update Projects',
  props<{ project: Project }>()
);

export const projectUpdated = createAction(
  '[PROJECT] Projects Updated',
  props<{ project: Project }>()
);

// Delete Actions
export  const  deleteProject = createAction(
  '[PROJECTS] Delete Projects',
  props<{ project: Project }>()
);

export const projectDeleted = createAction(
  '[PROJECT] Projects Deleted',
  props<{ project: Project }>()
);
