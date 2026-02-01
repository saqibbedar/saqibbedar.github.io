import mongoose from 'mongoose';

const contributorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    avatar: {type: mongoose.Schema.Types.ObjectId, ref: "File"},
    role: {type: String},
    githubUrl: {type: String}
}, {_id: false});

const projectSchema = new mongoose.Schema({
    slug: {type: String, trim: true, required: true, unique: true, index: true},
    title: {type: String, trim: true, required: true, minlength: 3},
    shortDescription: {type: String},
    fullDescription: {type: String},
    thumbnail: {type: mongoose.Schema.Types.ObjectId, ref: "File"},
    contributors: [contributorSchema],
    links: {
        github: {type: String},
        demo: {type: String},
        docker: {type: String},
        npm: {type: String},
        vscode: {type: String},
        pypi: {type: String},
        orcid: {type: String},
        other: [{label: {type: String}, url: {type: String}}]
    },
    metadata: {
        stars: {type: Number, default: 0},
        forks: {type: Number, default: 0},
        watchers: {type: Number, default: 0},
        languages: [
            {name: {type: String, percentage: Number, isMain: Boolean}}
        ],
        license: {type: String, default: "MIT"},
        lastUpdated: {type: Date}
    },
    tags: [{type: String}],
    category: {type: String, index: true}, // Frontend
    status: {type: String, enum: ["active", "archived", "deprecated"], default: "active"},
    visibility: {type: String, enum: ["public", "private"], default: "public"},
    featured: {type: Boolean, default: false}
}, {timestamps: true});

export default mongoose.models.Project || mongoose.model("Project", projectSchema);