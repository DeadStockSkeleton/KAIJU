const User = require('./User');
const Project = require('./Project');
const File = require('./File');
const { default: ProjectsLibrary } = require('../client/src/components/Projects/ProjectsLibrary');

Project.hasMany(File, {
    as: "file",
    foreignKey: 'project_id',
    onDelete: 'CASCADE',
})

File.belongsTo(Project, {
    foreignKey: 'project_id',
})

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Project.belongsTo(User,{
    foreignKey: 'user_id',
onDelete: 'CASCADE'})