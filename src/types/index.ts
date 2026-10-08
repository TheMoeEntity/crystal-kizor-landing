type Project = {
  name: string;
};
const projects: Project[] = [];
projects[0]?.name; // 'string | undefined'
