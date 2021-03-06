java \
-jar compiler.jar \
--js_output_file ../build/j3dt.js \
--js ../src/J3D.js \
--js ../src/math/Vector3.js \
--js ../src/math/Matrix44.js \
--js ../src/engine/Engine.js \
--js ../src/engine/Scene.js \
--js ../src/engine/Loader.js \
--js ../src/engine/Mesh.js \
--js ../src/engine/Light.js \
--js ../src/engine/Camera.js \
--js ../src/engine/Texture.js \
--js ../src/engine/Transform.js \
--js ../src/engine/ShaderAtlas.js \
--js ../src/engine/ShaderInclude.js \
--js ../src/renderers/Normal2Color.js \
--js ../src/renderers/Phong.js \
--js ../src/renderers/Gouraud.js \
--js ../src/util/Color.js \
--js ../src/util/Time.js \
--js ../lib/requestAnimationFrame.js \
--warning_level QUIET

cat ./info.txt ../lib/glMatrix.js ../build/j3dt.js > ../build/j3d.js

rm -Rf ../build/j3dt.js

